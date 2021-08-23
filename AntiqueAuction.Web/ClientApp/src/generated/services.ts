/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.13.2.0 (NJsonSchema v10.5.2.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { BaseService } from '../app/services/base.service';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, from as _observableFrom, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
    providedIn: 'root'
})
export class ApiGenerated extends BaseService {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        super();
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : this.getBaseUrl("");
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    auth(body: GenerateToken | undefined): Observable<GenerateTokenResponse> {
        let url_ = this.baseUrl + "/api/auth";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return _observableFrom(this.transformOptions(options_)).pipe(_observableMergeMap(transformedOptions_ => {
            return this.http.request("post", url_, transformedOptions_);
        })).pipe(_observableMergeMap((response_: any) => {
            return this.processAuth(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAuth(<any>response_);
                } catch (e) {
                    return <Observable<GenerateTokenResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<GenerateTokenResponse>><any>_observableThrow(response_);
        }));
    }

    protected processAuth(response: HttpResponseBase): Observable<GenerateTokenResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = GenerateTokenResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<GenerateTokenResponse>(<any>null);
    }

    /**
     * @return Success
     */
    bidsHistory(): Observable<BidHistory[]> {
        let url_ = this.baseUrl + "/api/bids-history";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return _observableFrom(this.transformOptions(options_)).pipe(_observableMergeMap(transformedOptions_ => {
            return this.http.request("get", url_, transformedOptions_);
        })).pipe(_observableMergeMap((response_: any) => {
            return this.processBidsHistory(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processBidsHistory(<any>response_);
                } catch (e) {
                    return <Observable<BidHistory[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<BidHistory[]>><any>_observableThrow(response_);
        }));
    }

    protected processBidsHistory(response: HttpResponseBase): Observable<BidHistory[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(BidHistory.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<BidHistory[]>(<any>null);
    }

    /**
     * @return Success
     */
    itemsGet(): Observable<Item[]> {
        let url_ = this.baseUrl + "/api/items";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return _observableFrom(this.transformOptions(options_)).pipe(_observableMergeMap(transformedOptions_ => {
            return this.http.request("get", url_, transformedOptions_);
        })).pipe(_observableMergeMap((response_: any) => {
            return this.processItemsGet(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processItemsGet(<any>response_);
                } catch (e) {
                    return <Observable<Item[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<Item[]>><any>_observableThrow(response_);
        }));
    }

    protected processItemsGet(response: HttpResponseBase): Observable<Item[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Item.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<Item[]>(<any>null);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    itemsPost(body: PlaceBid | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/items";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            })
        };

        return _observableFrom(this.transformOptions(options_)).pipe(_observableMergeMap(transformedOptions_ => {
            return this.http.request("post", url_, transformedOptions_);
        })).pipe(_observableMergeMap((response_: any) => {
            return this.processItemsPost(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processItemsPost(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processItemsPost(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    itemsPut(body: AutomateBid | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/items";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            })
        };

        return _observableFrom(this.transformOptions(options_)).pipe(_observableMergeMap(transformedOptions_ => {
            return this.http.request("put", url_, transformedOptions_);
        })).pipe(_observableMergeMap((response_: any) => {
            return this.processItemsPut(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processItemsPut(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processItemsPut(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }
}

export class Address implements IAddress {
    readonly street?: string | undefined;
    readonly city?: string | undefined;
    readonly state?: string | undefined;
    readonly country?: string | undefined;
    readonly zipCode?: string | undefined;

    constructor(data?: IAddress) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).street = _data["street"];
            (<any>this).city = _data["city"];
            (<any>this).state = _data["state"];
            (<any>this).country = _data["country"];
            (<any>this).zipCode = _data["zipCode"];
        }
    }

    static fromJS(data: any): Address {
        data = typeof data === 'object' ? data : {};
        let result = new Address();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["street"] = this.street;
        data["city"] = this.city;
        data["state"] = this.state;
        data["country"] = this.country;
        data["zipCode"] = this.zipCode;
        return data; 
    }
}

export interface IAddress {
    street?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    country?: string | undefined;
    zipCode?: string | undefined;
}

export class AutoBid implements IAutoBid {
    readonly id?: string;
    readonly createdOn?: Date;
    readonly updatedOn?: Date;
    readonly itemId?: string;
    readonly userId?: string;
    readonly incrementPerUnit?: number;
    readonly maxBidAmount?: number;
    isActive?: boolean;
    item?: Item;
    user?: User;

    constructor(data?: IAutoBid) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
            this.item = data.item && !(<any>data.item).toJSON ? new Item(data.item) : <Item>this.item; 
            this.user = data.user && !(<any>data.user).toJSON ? new User(data.user) : <User>this.user; 
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"];
            (<any>this).createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
            (<any>this).updatedOn = _data["updatedOn"] ? new Date(_data["updatedOn"].toString()) : <any>undefined;
            (<any>this).itemId = _data["itemId"];
            (<any>this).userId = _data["userId"];
            (<any>this).incrementPerUnit = _data["incrementPerUnit"];
            (<any>this).maxBidAmount = _data["maxBidAmount"];
            this.isActive = _data["isActive"];
            this.item = _data["item"] ? Item.fromJS(_data["item"]) : <any>undefined;
            this.user = _data["user"] ? User.fromJS(_data["user"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AutoBid {
        data = typeof data === 'object' ? data : {};
        let result = new AutoBid();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
        data["updatedOn"] = this.updatedOn ? this.updatedOn.toISOString() : <any>undefined;
        data["itemId"] = this.itemId;
        data["userId"] = this.userId;
        data["incrementPerUnit"] = this.incrementPerUnit;
        data["maxBidAmount"] = this.maxBidAmount;
        data["isActive"] = this.isActive;
        data["item"] = this.item ? this.item.toJSON() : <any>undefined;
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IAutoBid {
    id?: string;
    createdOn?: Date;
    updatedOn?: Date;
    itemId?: string;
    userId?: string;
    incrementPerUnit?: number;
    maxBidAmount?: number;
    isActive?: boolean;
    item?: IItem;
    user?: IUser;
}

export class AutomateBid implements IAutomateBid {
    itemId?: string;
    userId?: string;
    incrementFactor?: number;
    maxBidAmount?: number;

    constructor(data?: IAutomateBid) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.itemId = _data["itemId"];
            this.userId = _data["userId"];
            this.incrementFactor = _data["incrementFactor"];
            this.maxBidAmount = _data["maxBidAmount"];
        }
    }

    static fromJS(data: any): AutomateBid {
        data = typeof data === 'object' ? data : {};
        let result = new AutomateBid();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["itemId"] = this.itemId;
        data["userId"] = this.userId;
        data["incrementFactor"] = this.incrementFactor;
        data["maxBidAmount"] = this.maxBidAmount;
        return data; 
    }
}

export interface IAutomateBid {
    itemId?: string;
    userId?: string;
    incrementFactor?: number;
    maxBidAmount?: number;
}

export class BidHistory implements IBidHistory {
    readonly id?: string;
    readonly createdOn?: Date;
    readonly updatedOn?: Date;
    readonly itemId?: string;
    readonly userId?: string;
    readonly amount?: number;
    item?: Item;
    user?: User;

    constructor(data?: IBidHistory) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
            this.item = data.item && !(<any>data.item).toJSON ? new Item(data.item) : <Item>this.item; 
            this.user = data.user && !(<any>data.user).toJSON ? new User(data.user) : <User>this.user; 
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"];
            (<any>this).createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
            (<any>this).updatedOn = _data["updatedOn"] ? new Date(_data["updatedOn"].toString()) : <any>undefined;
            (<any>this).itemId = _data["itemId"];
            (<any>this).userId = _data["userId"];
            (<any>this).amount = _data["amount"];
            this.item = _data["item"] ? Item.fromJS(_data["item"]) : <any>undefined;
            this.user = _data["user"] ? User.fromJS(_data["user"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BidHistory {
        data = typeof data === 'object' ? data : {};
        let result = new BidHistory();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
        data["updatedOn"] = this.updatedOn ? this.updatedOn.toISOString() : <any>undefined;
        data["itemId"] = this.itemId;
        data["userId"] = this.userId;
        data["amount"] = this.amount;
        data["item"] = this.item ? this.item.toJSON() : <any>undefined;
        data["user"] = this.user ? this.user.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IBidHistory {
    id?: string;
    createdOn?: Date;
    updatedOn?: Date;
    itemId?: string;
    userId?: string;
    amount?: number;
    item?: IItem;
    user?: IUser;
}

export class GenerateToken implements IGenerateToken {
    username!: string;
    password!: string;

    constructor(data?: IGenerateToken) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.username = _data["username"];
            this.password = _data["password"];
        }
    }

    static fromJS(data: any): GenerateToken {
        data = typeof data === 'object' ? data : {};
        let result = new GenerateToken();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username;
        data["password"] = this.password;
        return data; 
    }
}

export interface IGenerateToken {
    username: string;
    password: string;
}

export class GenerateTokenResponse implements IGenerateTokenResponse {
    token?: string | undefined;

    constructor(data?: IGenerateTokenResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.token = _data["token"];
        }
    }

    static fromJS(data: any): GenerateTokenResponse {
        data = typeof data === 'object' ? data : {};
        let result = new GenerateTokenResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["token"] = this.token;
        return data; 
    }
}

export interface IGenerateTokenResponse {
    token?: string | undefined;
}

export class Item implements IItem {
    readonly id?: string;
    readonly createdOn?: Date;
    readonly updatedOn?: Date;
    readonly name?: string | undefined;
    readonly price?: number;
    readonly isActive?: boolean;
    readonly sellerId?: string;
    readonly auctionStart?: Date;
    readonly auctionEnd?: Date;
    readonly image?: string | undefined;
    readonly inspectionStart?: Date;
    readonly inspectionEnd?: Date;
    readonly lastBid?: number;
    readonly description?: string | undefined;
    readonly quantity?: number;
    seller?: User;
    readonly autoBids?: AutoBid[] | undefined;
    readonly bidHistories?: BidHistory[] | undefined;

    constructor(data?: IItem) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
            this.seller = data.seller && !(<any>data.seller).toJSON ? new User(data.seller) : <User>this.seller; 
            if (data.autoBids) {
                this.autoBids = [];
                for (let i = 0; i < data.autoBids.length; i++) {
                    let item = data.autoBids[i];
                    this.autoBids[i] = item && !(<any>item).toJSON ? new AutoBid(item) : <AutoBid>item;
                }
            }
            if (data.bidHistories) {
                this.bidHistories = [];
                for (let i = 0; i < data.bidHistories.length; i++) {
                    let item = data.bidHistories[i];
                    this.bidHistories[i] = item && !(<any>item).toJSON ? new BidHistory(item) : <BidHistory>item;
                }
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"];
            (<any>this).createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
            (<any>this).updatedOn = _data["updatedOn"] ? new Date(_data["updatedOn"].toString()) : <any>undefined;
            (<any>this).name = _data["name"];
            (<any>this).price = _data["price"];
            (<any>this).isActive = _data["isActive"];
            (<any>this).sellerId = _data["sellerId"];
            (<any>this).auctionStart = _data["auctionStart"] ? new Date(_data["auctionStart"].toString()) : <any>undefined;
            (<any>this).auctionEnd = _data["auctionEnd"] ? new Date(_data["auctionEnd"].toString()) : <any>undefined;
            (<any>this).image = _data["image"];
            (<any>this).inspectionStart = _data["inspectionStart"] ? new Date(_data["inspectionStart"].toString()) : <any>undefined;
            (<any>this).inspectionEnd = _data["inspectionEnd"] ? new Date(_data["inspectionEnd"].toString()) : <any>undefined;
            (<any>this).lastBid = _data["lastBid"];
            (<any>this).description = _data["description"];
            (<any>this).quantity = _data["quantity"];
            this.seller = _data["seller"] ? User.fromJS(_data["seller"]) : <any>undefined;
            if (Array.isArray(_data["autoBids"])) {
                (<any>this).autoBids = [] as any;
                for (let item of _data["autoBids"])
                    (<any>this).autoBids!.push(AutoBid.fromJS(item));
            }
            if (Array.isArray(_data["bidHistories"])) {
                (<any>this).bidHistories = [] as any;
                for (let item of _data["bidHistories"])
                    (<any>this).bidHistories!.push(BidHistory.fromJS(item));
            }
        }
    }

    static fromJS(data: any): Item {
        data = typeof data === 'object' ? data : {};
        let result = new Item();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
        data["updatedOn"] = this.updatedOn ? this.updatedOn.toISOString() : <any>undefined;
        data["name"] = this.name;
        data["price"] = this.price;
        data["isActive"] = this.isActive;
        data["sellerId"] = this.sellerId;
        data["auctionStart"] = this.auctionStart ? this.auctionStart.toISOString() : <any>undefined;
        data["auctionEnd"] = this.auctionEnd ? this.auctionEnd.toISOString() : <any>undefined;
        data["image"] = this.image;
        data["inspectionStart"] = this.inspectionStart ? this.inspectionStart.toISOString() : <any>undefined;
        data["inspectionEnd"] = this.inspectionEnd ? this.inspectionEnd.toISOString() : <any>undefined;
        data["lastBid"] = this.lastBid;
        data["description"] = this.description;
        data["quantity"] = this.quantity;
        data["seller"] = this.seller ? this.seller.toJSON() : <any>undefined;
        if (Array.isArray(this.autoBids)) {
            data["autoBids"] = [];
            for (let item of this.autoBids)
                data["autoBids"].push(item.toJSON());
        }
        if (Array.isArray(this.bidHistories)) {
            data["bidHistories"] = [];
            for (let item of this.bidHistories)
                data["bidHistories"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IItem {
    id?: string;
    createdOn?: Date;
    updatedOn?: Date;
    name?: string | undefined;
    price?: number;
    isActive?: boolean;
    sellerId?: string;
    auctionStart?: Date;
    auctionEnd?: Date;
    image?: string | undefined;
    inspectionStart?: Date;
    inspectionEnd?: Date;
    lastBid?: number;
    description?: string | undefined;
    quantity?: number;
    seller?: IUser;
    autoBids?: IAutoBid[] | undefined;
    bidHistories?: IBidHistory[] | undefined;
}

export class PlaceBid implements IPlaceBid {
    itemId!: string;
    userId!: string;
    amount!: number;

    constructor(data?: IPlaceBid) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.itemId = _data["itemId"];
            this.userId = _data["userId"];
            this.amount = _data["amount"];
        }
    }

    static fromJS(data: any): PlaceBid {
        data = typeof data === 'object' ? data : {};
        let result = new PlaceBid();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["itemId"] = this.itemId;
        data["userId"] = this.userId;
        data["amount"] = this.amount;
        return data; 
    }
}

export interface IPlaceBid {
    itemId: string;
    userId: string;
    amount: number;
}

export class User implements IUser {
    readonly id?: string;
    readonly createdOn?: Date;
    readonly updatedOn?: Date;
    readonly name?: string | undefined;
    readonly username?: string | undefined;
    readonly passwordHash?: string | undefined;
    readonly contactNo?: string | undefined;
    readonly walletAmount?: number;
    readonly maxBidAmount?: number;
    address?: Address;
    autoBids?: AutoBid[] | undefined;
    itemHistories?: BidHistory[] | undefined;

    constructor(data?: IUser) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
            this.address = data.address && !(<any>data.address).toJSON ? new Address(data.address) : <Address>this.address; 
            if (data.autoBids) {
                this.autoBids = [];
                for (let i = 0; i < data.autoBids.length; i++) {
                    let item = data.autoBids[i];
                    this.autoBids[i] = item && !(<any>item).toJSON ? new AutoBid(item) : <AutoBid>item;
                }
            }
            if (data.itemHistories) {
                this.itemHistories = [];
                for (let i = 0; i < data.itemHistories.length; i++) {
                    let item = data.itemHistories[i];
                    this.itemHistories[i] = item && !(<any>item).toJSON ? new BidHistory(item) : <BidHistory>item;
                }
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"];
            (<any>this).createdOn = _data["createdOn"] ? new Date(_data["createdOn"].toString()) : <any>undefined;
            (<any>this).updatedOn = _data["updatedOn"] ? new Date(_data["updatedOn"].toString()) : <any>undefined;
            (<any>this).name = _data["name"];
            (<any>this).username = _data["username"];
            (<any>this).passwordHash = _data["passwordHash"];
            (<any>this).contactNo = _data["contactNo"];
            (<any>this).walletAmount = _data["walletAmount"];
            (<any>this).maxBidAmount = _data["maxBidAmount"];
            this.address = _data["address"] ? Address.fromJS(_data["address"]) : <any>undefined;
            if (Array.isArray(_data["autoBids"])) {
                this.autoBids = [] as any;
                for (let item of _data["autoBids"])
                    this.autoBids!.push(AutoBid.fromJS(item));
            }
            if (Array.isArray(_data["itemHistories"])) {
                this.itemHistories = [] as any;
                for (let item of _data["itemHistories"])
                    this.itemHistories!.push(BidHistory.fromJS(item));
            }
        }
    }

    static fromJS(data: any): User {
        data = typeof data === 'object' ? data : {};
        let result = new User();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["createdOn"] = this.createdOn ? this.createdOn.toISOString() : <any>undefined;
        data["updatedOn"] = this.updatedOn ? this.updatedOn.toISOString() : <any>undefined;
        data["name"] = this.name;
        data["username"] = this.username;
        data["passwordHash"] = this.passwordHash;
        data["contactNo"] = this.contactNo;
        data["walletAmount"] = this.walletAmount;
        data["maxBidAmount"] = this.maxBidAmount;
        data["address"] = this.address ? this.address.toJSON() : <any>undefined;
        if (Array.isArray(this.autoBids)) {
            data["autoBids"] = [];
            for (let item of this.autoBids)
                data["autoBids"].push(item.toJSON());
        }
        if (Array.isArray(this.itemHistories)) {
            data["itemHistories"] = [];
            for (let item of this.itemHistories)
                data["itemHistories"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IUser {
    id?: string;
    createdOn?: Date;
    updatedOn?: Date;
    name?: string | undefined;
    username?: string | undefined;
    passwordHash?: string | undefined;
    contactNo?: string | undefined;
    walletAmount?: number;
    maxBidAmount?: number;
    address?: IAddress;
    autoBids?: IAutoBid[] | undefined;
    itemHistories?: IBidHistory[] | undefined;
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}