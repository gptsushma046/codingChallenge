
import { newPayload } from "../interfaces/payload.Interface"; 
import { flatArrayInterface } from "../interfaces/flatArray.interface";
import { flatObjectInterface } from "../interfaces/flatObject.interface";

export class payload{

 createPayload(data:any) : newPayload[] {
  var flatArray:flatArrayInterface[] = [];
  var flatObject:flatObjectInterface = {};

  // this will convert nested object into flat object
  for (var index = 0; index < data.length; index++) {
    for (var key in data[index]) {
      var value = data[index][key];
      if (Array.isArray(value)) {
        const newArr2 = value.map(v => Object.assign(v, flatObject));
        flatObject={};
        if(newArr2)
        newArr2.reduce(function(a, item) {
          flatArray.push(item);
          }, {});
      }else{
          flatObject['event_name'] = value;
      }
    }
  }
  var final:newPayload[] = [];
  
  //filter flatArray using recordLabel and for expected payload new object

  flatArray.map( (item :any) =>item.recordLabel).filter( (value:any, index:any, _arr:any) => 
  _arr.indexOf(value) == index).reduce((a:any,data:any)=>{
    if(data){
    var filteredArray = flatArray.filter(function(itm:any){
      return itm.recordLabel == data;
    }).map((item:any) => (
      {
        "name":item.name,
        "festivals":[{"name":item.event_name}]
      } 
    ));
    final.push({"label":data,bands:filteredArray})
    }
  });
  return final;
}
}
