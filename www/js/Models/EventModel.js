'use strict';

function Event(data) {
    
    this.titre = data.TITRE;
    this.description = data.DESCRIP;
    this.fullAddress = data.LOC;
    this.date = data.DT01;

    this._id = data._id;

    this.getMain = function(){
        return this.titre;
    };

    this.getSub = function(){
        return this.description;
    };

    this.getDetail = function(){
        return this.description;
    };

    this.getSomeMoreDetail = function(){
        return  this.fullAddress;
    };

    this.getMoreDetail = function(){
        return this.date;
    };

    this.getIcon = function(){
        return "ion-calendar";
    };
}