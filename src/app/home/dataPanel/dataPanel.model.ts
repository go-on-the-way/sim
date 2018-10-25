export class GatherData {
    id: string;
    orderNoConfirmdNum: string;
    orderNoDeliverNum: string;
    returnNoConfirmdNum: string;
    certVendorWarnNum: string;
    certCstWarnNum: string;
    certGrantWarnNum: string;
    deliverCompanyNum: string;
    deliverOtherNum: string;
    dateList: Array<string>;
    num1List: Array<string>;
    num2List: Array<string>;

    constructor(data: any = {}) {
        this.id = data.id || '0';
        this.orderNoConfirmdNum = data.orderNoConfirmdNum || '0';
        this.orderNoDeliverNum = data.orderNoDeliverNum || '0';
        this.returnNoConfirmdNum = data.returnNoConfirmdNum || '0';
        this.certVendorWarnNum = data.certVendorWarnNum || '0';
        this.certCstWarnNum = data.certCstWarnNum || '0';
        this.certGrantWarnNum = data.certGrantWarnNum || '0';
        this.deliverCompanyNum = data.deliverCompanyNum || '0';
        this.deliverOtherNum = data.deliverOtherNum || '0';
        this.dateList = data.dateList || [];
        this.num1List = data.num1List || [];
        this.num2List = data.num2List || [];
    }
}
