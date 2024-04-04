/** @format */

export interface UserModel {
	address: Address;
	company: Company;
	email: string;
	id: any[];
	name: string;
	phone: string;
	username: string;
	website: string;
	key: string;
}

export interface Address {
	city: string;
	geo: Geo;
	street: string;
	suite: string;
	zipcode: string;
}

export interface Geo {
	lat: string;
	lng: string;
}

export interface Company {
	bs: string;
	catchPhrase: string;
	name: string;
}
