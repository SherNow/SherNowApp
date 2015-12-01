function Wifi(data) {
  this.postalCode = data.postal_code;
  this.address = data.civic_number + " " + data.street_name + ", " + data.city;
  this.fullAddress = this.address + ", " + this.postalCode;
  this.description = data.description;
  this.name = data.name;
  this.distance = "100m";
  this.phone = data.public_phone_number;
  
  this._id = data._id;
  
    this.getMain = function(){
      return this.name;
    };
    
    this.getSub = function(){
      return this.address;
    };
    
    this.getDetail = function(){
      return this.fullAddress;
    };
    
    this.getMoreDetail = function(){
      return this.distance;
    };
    
    this.getIcon = function(){
      return "ion-wifi";
    };
}