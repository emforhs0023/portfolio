import produce from 'immer';

export const initialState = {
    dataList:[],
    me:[],
    project:[],
    homepageList:[],
    loading: false,
    hasMorePost: false,
    hasMobilePost: false,
    dataList1:[],
    architecture:"",
    dataBase:[],
    webServer:[],
    client:[],
};

export const DATA_LIST_SUCCESS = "DATA_LIST_SUCCESS" 
export const DATA_LIST_REQUEST = "DATA_LIST_REQUEST" 
export const DATA_LIST_FAILURE = "DATA_LIST_FAILURE" 

export const DATA_MOBILE_LIST_SUCCESS = "DATA_MOBILE_LIST_SUCCESS" 
export const DATA_MOBILE_LIST_REQUEST = "DATA_MOBILE_LIST_REQUEST" 
export const DATA_MOBILE_LIST_FAILURE = "DATA_MOBILE_LIST_FAILURE" 

export const DATA_MOBILE_MORE_LIST_SUCCESS = "DATA_MOBILE_MORE_LIST_SUCCESS" 
export const DATA_MOBILE_MORE_LIST_REQUEST = "DATA_MOBILE_MORE_LIST_REQUEST" 
export const DATA_MOBILE_MORE_LIST_FAILURE = "DATA_MOBILE_MORE_LIST_FAILURE" 

export const MY_DATA_SUCCESS = "MY_DATA_SUCCESS" 
export const MY_DATA_REQUEST = "MY_DATA_REQUEST" 
export const MY_DATA_FAILURE = "MY_DATA_FAILURE" 

export const PROJECT_LIST_SUCCESS = "PROJECT_LIST_SUCCESS" 
export const PROJECT_LIST_REQUEST = "PROJECT_LIST_REQUEST" 
export const PROJECT_LIST_FAILURE = "PROJECT_LIST_FAILURE" 

export const PROJECT_HOMEPAGE_REQUEST = "PROJECT_HOMEPAGE_REQUEST"
export const PROJECT_HOMEPAGE_SUCCESS = "PROJECT_HOMEPAGE_SUCCESS"
export const PROJECT_HOMEPAGE_FAILURE = "PROJECT_HOMEPAGE_FAILURE"

export const PROJECT_MORE_SUCCESS = "PROJECT_MORE_SUCCESS" 
export const PROJECT_MORE_REQUEST = "PROJECT_MORE_REQUEST" 
export const PROJECT_MORE_FAILURE = "PROJECT_MORE_FAILURE" 

export const PROJECT_IMG_SUCCESS = "PROJECT_IMG_SUCCESS" 
export const PROJECT_IMG_REQUEST = "PROJECT_IMG_REQUEST" 
export const PROJECT_IMG_FAILURE = "PROJECT_IMG_FAILURE" 

export const PROJECT_DATA_BASE_SUCCESS = "PROJECT_DATA_BASE_SUCCESS" 
export const PROJECT_DATA_BASE_REQUEST = "PROJECT_DATA_BASE_REQUEST" 
export const PROJECT_DATA_BASE_FAILURE = "PROJECT_DATA_BASE_FAILURE" 

export const PROJECT_WEBSERVER_SUCCESS = "PROJECT_WEBSERVER_SUCCESS" 
export const PROJECT_WEBSERVER_REQUEST = "PROJECT_WEBSERVER_REQUEST" 
export const PROJECT_WEBSERVER_FAILURE = "PROJECT_WEBSERVER_FAILURE" 

export const PROJECT_CLIENT_SUCCESS = "PROJECT_CLIENT_SUCCESS" 
export const PROJECT_CLIENT_REQUEST = "PROJECT_CLIENT_REQUEST" 
export const PROJECT_CLIENT_FAILURE = "PROJECT_CLIENT_FAILURE" 


export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type){
            
            case DATA_LIST_REQUEST : {
                draft.loading = true;
                break;
            }
            case DATA_LIST_SUCCESS : {
               draft.dataList = action.data;
                draft.loading = false;
                break;
            }
            case DATA_LIST_FAILURE : {
                
            }
            case DATA_MOBILE_LIST_REQUEST : {
                draft.loading = true;
                break;
            }
            
            case DATA_MOBILE_LIST_SUCCESS : {
                
                draft.dataList1 = action.data;
                break;
            }
           
            

            case DATA_MOBILE_LIST_FAILURE : {
                
            }
            case MY_DATA_REQUEST : {
                draft.loading = true;
                break;
            }
            case MY_DATA_SUCCESS : {
                draft.me = action.data;
                draft.loading = false;
                break;
            }
            case MY_DATA_FAILURE : {
                
            }
            case PROJECT_LIST_REQUEST : {
                draft.loading = true;
                break;
            }
            case PROJECT_LIST_SUCCESS : {
                draft.project = action.data;
                draft.loading = false;
                break;
            }
            case PROJECT_LIST_FAILURE : {
                
            }
            case PROJECT_HOMEPAGE_REQUEST : {
                draft.loading = true;
                break;
            }
            case PROJECT_HOMEPAGE_SUCCESS : {
                draft.homepageList = action.data;
                draft.loading = false;
                break;
            }
            case PROJECT_HOMEPAGE_FAILURE : {
                
            }
            case PROJECT_MORE_REQUEST : {
                draft.hasMorePost =  true;
                draft.loading = true;
                break;
            }
            case PROJECT_MORE_SUCCESS : {
                if(action.data != undefined){
                    action.data.forEach((d) => {
                        draft.homepageList.push(d);
                    });    
                    draft.loading = false;
                    draft.hasMorePost =  false;
                    break;
                }
            }
            case DATA_MOBILE_MORE_LIST_REQUEST : {
                draft.hasMobilePost =  true;
                draft.loading = true;
                break;
            }
            case DATA_MOBILE_MORE_LIST_SUCCESS : {
                if(action.data != undefined){
                    action.data.forEach((d) => {
                        draft.dataList1.push(d);
                    });    
                    draft.loading = false;
                    draft.hasMobilePost =  false;
                    break;
                }
            }
            case PROJECT_IMG_REQUEST : {
                draft.loading = true;
                break;
            }
            case PROJECT_IMG_SUCCESS : {
                draft.loading = false;
                draft.architecture = action.data[0].architecture;
            }
            case PROJECT_DATA_BASE_REQUEST : {
                draft.loading = true;
                break;
            }
            case PROJECT_DATA_BASE_SUCCESS : {
                draft.loading = false;
                draft.dataBase = action.data[0];
                // draft.architecture = action.data[0].architecture;
            }
            case PROJECT_WEBSERVER_REQUEST : {
                draft.loading = true;
                break;
            }
            case PROJECT_WEBSERVER_SUCCESS : {
                draft.loading = false;
                draft.webServer = action.data[0];
                
            }
            case PROJECT_CLIENT_REQUEST : {
                draft.loading = true;
                break;
            }
            case PROJECT_CLIENT_SUCCESS : {
                draft.loading = false;
                draft.client = action.data[0];
            }



            default:
            break;
        }
    })
}

