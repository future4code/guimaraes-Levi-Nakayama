import { v4 as genId, validate } from 'uuid'

export const validadeId=(id: string)=>{
    return validate(id)
}