interface IServerConfiData {
        url: string;
        userName: string;
        password: string;
}

type serverName = string;
const serverConfigDataMap: Record<serverName, IServerConfiData> = null;

// interface productDetails {
//     productId : number , 
//     price : number , 
//     discount : number
//  };
 
//  const myVar : Record<number, productDetails> = {
//     1: {
//         productId : number , 
//         price : number , 
//         discount : number
//     }
//  }

export = serverConfigDataMap;