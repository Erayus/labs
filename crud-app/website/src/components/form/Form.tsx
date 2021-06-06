import React, { useState, FormEvent, useRef } from 'react'
import axios from 'axios';


interface IProps {
    title: string
}
interface ICar {
    brand: string,
    model: string
}
const Form: React.FC<IProps> = (props) => {
    const [car, setCar] = useState<ICar>({
        brand: '',
        model: ''
    });
    const inputRef = useRef();
    
    const submitHandler = (e: any) => {
        e.preventDefault();
        axios.post('https://n3lhtblan4.execute-api.us-east-1.amazonaws.com/prod/cars', {
            ...car
        }).then(
            (response) => {
                setCar({brand:'', model: ''});
                console.log(response)
            })
          .catch(
              (err) => console.log(err)
        );
    }

    const inputHandler = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.currentTarget;
        setCar({...car, [name]: value})
    }

    return (
                <form onSubmit={submitHandler}>
                    <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                        Brand
                    </label>
                    <input  type="text" id="defaultFormRegisterNameEx" className="form-control" name="brand" value={car.brand} onChange={inputHandler} />
                    <br />
                    <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                        Model
                    </label>
                    <input type="text" id="defaultFormRegisterEmailEx" className="form-control" name="model" value={car.model} onChange={inputHandler} />
                    
                    <div className="text-center mt-4">
                    <button color="unique" type="submit">
                        Register
                    </button>
                    </div>
                </form>
  
    )
}

export default Form
