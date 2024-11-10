import {useEffect, useState} from 'react';
import {Location} from 'react-native-background-geolocation';
import {openDatabase, SQLiteDatabase} from 'react-native-sqlite-storage';

export const DB_NAME = 'tracking.sqlite';
export const TABLE_NAME = 'TrackingData';

const useDB = () => {
  const [DB, setDB] = useState<SQLiteDatabase>();

  useEffect(() => {
    openDatabase({
      name: DB_NAME,
      location: 'default',
    }).then(res => {
      setDB(res);
    });
  }, []);

  useEffect(() => {
    if (DB) {
      DB.transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        creation_time VARCHAR(255),
        motion_type VARCHAR(255),
        latitude REAL,
        longitude REAL,
        speed REAL
      )`,
        );
      }).then(res => console.log('Table Create Successfully', {res}));
    }
  }, [DB]);

  const addLocation = (data: Location) => {
    if (!DB) {
      return;
    }
    DB.transaction(tx => {
      tx.executeSql(
        `INSERT INTO ${TABLE_NAME} (creation_time,motion_type, latitude, longitude, speed) VALUES (?, ?, ?)`,
        [
          data.timestamp,
          data.activity.type,
          data.coords.latitude,
          data.coords.longitude,
          data.coords.speed,
        ],
      );
    });
  };

  const getLocations = async () => {
    const results = await DB?.executeSql(`SELECT * FROM ${TABLE_NAME};`);
    return results?.[0]?.rows || [];
  };

  return {DB, addLocation, getLocations};
};

export default useDB;
