import express, {Request, Response} from 'express';
import db from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const create = async(req:Request, res:Response) => {
    try{

        const salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(req.body.password,salt)
        const record = await db.User.create({
            id:req.body.id,
            name:req.body.name,
            email:req.body.email,
            password:hash
        })
        return res.json(
            { 
             record, 
            message:"User Successfully Ragistered"
        })
    }catch (error){
        res.json(
            {
                message:"Could't User Register!",
                error
            })
    }
};
const login = async (req:Request, res:Response) => {
    try{
        const secret:any = process.env.TOKEN_SECRET;
        const UserDetails = await db.User.findOne({where: { email: req.body.email} })
        if(UserDetails.email === null || UserDetails.email === undefined){
            res.send("Email ID Not Found....")
        }else if(!bcrypt.compareSync(req.body.password.toString(), req.body.password.toString())){
            res.send("password Incorrect...")
        }else{
            const token = jwt.sign( { id:req.body.id }, secret, { expiresIn: '1d' })
            res.send({msg:"User login successfully..",Token:token})
        }
    }catch(error){
        return res.send(error)
    }
};
const findall = async (req:Request, res:Response) => {
    try{
       const data = await db.User.findAll({})
      return res.send(data)

    }catch (error){
        return res.send
        ({
            message:"User Not Found!..",
            error
        })
    }
};
const updateuser = async (req:Request, res:Response) => {
    try{
        const record = await db.User.update(req.body, {where: {id:req.params.id } })
        console.log(record)
        return res.send
        ({ 
            record, 
            message:"User Record Successfully  updated..."
        })
    }catch (error){
        res.send({
            message:"Something went wrong....Could't update record",
            error
        })
    }
};
const deleteuser = async (req:Request, res:Response) => {
    try{
        const record = await db.User.destroy({where: {id:req.params.id } })
        return res.json({
             record, 
             message:"User Record Successfully deleted..."
            })
    }catch (error){
        res.json({
            message:"Something went wrong....Could't Delete record",
            error
        })
    }
};


export default {create, login,  findall, updateuser, deleteuser }