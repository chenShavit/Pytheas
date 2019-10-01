import {Trip} from './trip'
import {Profile} from './profile'
export class User{
 full_name:string;
 email:string;
 password:string;
 token:string;
 trips:[Trip];
 saved?:[Trip];
 profiles:[Profile];
}
