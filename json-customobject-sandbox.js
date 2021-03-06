$( document ).ready(function() {
    IndctrOrdElem = function(indId, panelForm){
        //0..N of these are stored in `_indicatorOrdering`
        //to record which order the panels should be rendered
        //in.
        this.indicatorid = indId;
        this.panelform = panelForm;
    };
    /***********************************************
    IndctrOrdElem.prototype.toJSON() {
        return {attr: this.getAttr()}; // everything that needs to get stored
    };
    IndctrOrdElem.fromJSON = function(obj) {
        if (typeof obj == "string") obj = JSON.parse(obj);
        var instance = new IndctrOrdElem;
        instance._attr = obj.attr;
        return instance;
    };    
    ************************************************/
    //
    var arr = [];
    arr.push(new IndctrOrdElem(1, 101));
    arr.push(new IndctrOrdElem(2, 102));
    arr.push(new IndctrOrdElem(3, 103));
    arr.push(new IndctrOrdElem(4, 104));
    arr.push(new IndctrOrdElem(5, 105));
    //
    var str = "{'data': {'myDashIndctrOrdrngArray':" + arr + "}}";
    var obj = {}
    obj.data = {}
    obj.data.myDashIndctrOrdrngArray = arr;
    //
    var jayson = JSON.stringify(obj);
    //
    console.log(jayson);
    //
    var newobj = JSON.parse(jayson);
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(newobj.data.myDashIndctrOrdrngArray[0].panelform);
    console.log(newobj.data.myDashIndctrOrdrngArray[1].panelform);
    console.log(newobj.data.myDashIndctrOrdrngArray[2].panelform);
    console.log(newobj.data.myDashIndctrOrdrngArray[3].panelform);
});
