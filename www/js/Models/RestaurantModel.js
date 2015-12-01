function Restaurant(data) {
  this.postalCode = data.CodePostal;
  this.address = data.NumeroCivique + " " + data.Rue + ", " + data.Ville;
  this.fullAddress = this.address + ", " + this.postalCode;
  this.description = data.DescriptionCourte;
  this.name = data.Nom;
  this.distance = "100m";
  this.phone = data.NumeroTelephone;
  this.prix = data.EchellePrix;
  this.image = data.FichierImage;
  this.siteWeb = data.SiteWeb;
  
  
  this._id = data._id;
  
    this.getMain = function(){
      return this.name;
    }
    
    this.getSub = function(){
      return this.address;
    }
    
    this.getDetail = function(){
      return this.fullAddress;
    }
    
    this.getMoreDetail = function(){
      return this.distance;
    }
    
    this.getIcon = function(){
      return "ion-android-restaurant";
    }
    
    this.getImage = function(){
      return this.image;
    }
    
    this.getDescription = function(){
      return this.description;
    }
        
    this.getEchelle = function(){
        return new Array(parseInt(this.prix));
    }
    
    this.getSafeSiteWeb = function(){
        if(this.siteWeb){
          if(this.siteWeb.substring(0,3) != "http"){
            return "http://" + this.siteWeb;
          }
          else{
            return this.siteWeb();
          }
        }
        else{
          return "";
        }
    }
    

    
}