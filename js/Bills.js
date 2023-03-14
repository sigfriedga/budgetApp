class Bills extends Data{
    static billsCounter = 0;

    constructor(description, value){
        super(description, value);
        this._id = ++Bills.billsCounter;
    }

    get id(){
        return this._id;
    }
}