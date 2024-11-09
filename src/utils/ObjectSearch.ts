/**
 * 
 * @param value 
 * @param searchQuery 
 * @returns {boolean}
 * if an Object, Array, ..etc value 
 * includes the searchquery
 * * Recursive function
 */

const ObjectSearch = (value:any,searchQuery:string):boolean => {
    
    let isMatching:boolean = false;

    // null | undefined | empty | false
    if(!value || value === " " ) 
    return false

    //if array
    if(Array.isArray(value)){
        for(const values of value){
            if(typeof(values) === 'object'){
                const res = ObjectSearch(values,searchQuery)
                if(res){
                    isMatching = true
                    break;
                }
            }else if(String(values).toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())){
                isMatching = true
                break;
            }
        }
    }else if(typeof(value) === 'object'){
        // if object
        for(const values of Object.values(value)){
            if(typeof(values) === 'object'){
                const res = ObjectSearch(values,searchQuery)
                if(res){
                    isMatching = true
                    break;
                }
            }else if(String(values).toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())){
                isMatching = true
                break;
            }
        }
    }else if(String(value).toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())){
        isMatching = true
    }

    return isMatching
}

export { ObjectSearch }
