const initialState={
    Menu_Options:[]
}

export default (state=initialState,action) => {
    switch(action.type){
        case "SHOP_DATA" : {
            return {
                ...state,
                Menu_Options: action.shopData
            }
        } 
        default : 
      return state;

    }


}