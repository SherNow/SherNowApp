function Restaurant(data) {
    var address = data.NumeroCivique + " " + data.Rue + ", " + data.Ville;
    var fullAddress = address + ", " + data.CodePostal;
    var distance = "100m";
    var categories = data.Categories.split(',');
    var related = [];
    
    this.getMain = function(){
      return data.Nom;
    }
    
    this.getRelatedRestaurants = function(){
      return related;
    }
    
    this.addRelatedRestaurant = function(restaurant){
      if (!_.contains(related, restaurant) && this != restaurant){
        related.push(restaurant);
      }
    }
    
    this.getCategories = function(){
        return categories;
    };
    
    this.getId = function(){
        return data._id;
    }
    
    this.getPhone = function(){
        return data.NumeroTelephone;
    }
    
    this.getSub = function(){
        return address;
    };

    this.getDetail = function(){
        return fullAddress;
    };

    this.getMoreDetail = function(){
        return distance;
    };

    this.getIcon = function(){
        return "ion-android-restaurant";
    };

    this.getImage = function(){
        return data.FichierImage;
    };

    this.getDescription = function(){
        return data.DescriptionCourte;
    };

    this.getEchelle = function(){
        return new Array(parseInt(data.EchellePrix));
    };

    this.getSafeSiteWeb = function(){
        if (data.SiteWeb){
            return (data.SiteWeb.substring(0, 4) != "http" ? "http://" : "") + data.SiteWeb;
        }
        else{
          return "";
        }
    }
}