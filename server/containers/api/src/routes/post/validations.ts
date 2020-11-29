import * as messages from "../../messages/index";

type ValidationResponseForger = (error:boolean, message:string) => IValidationResponse;

interface IValidationResponse {
    error: boolean;
    message: string;
}

const response:ValidationResponseForger = (error, message) => {

    return {
        error, message
    }

}

export const title = title => {

    if (title.length > 1)
        return 

}