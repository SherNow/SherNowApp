function Parking(data) {
  this._id = data._id;
  this.name = data.properties.NOM;
  
    this.getMain = function(){
      return this.name;
    }
    
    this.getSub = function(){
      return "";
    }
    
    this.getDetail = function(){
      return "";
    }
    
    this.getMoreDetail = function(){
      return "";
    }
    
    this.getIcon = function(){
      return "ion-android-car";
    }
}