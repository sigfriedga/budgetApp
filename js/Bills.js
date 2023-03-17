class Bill extends Data{
    static billsCounter = 0;

    constructor(description, value){
        super(description, value);
        this._id = ++Bill.billsCounter;
    }

    get id(){
        return this._id;
    }
}