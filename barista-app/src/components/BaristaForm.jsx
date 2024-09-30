import {Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";

const BaristaForm = () => {

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const onNewDrink = () => {

    }

    const onCheckAnswer = () => {
            
    }

    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <form> 
                <button            
                    type="submit" 
                    className="button submit"
                    onClick={onCheckAnswer}
                >Check Answer</button>
                <button 
                    type="button" 
                    className="button submit"
                    onClick={onNewDrink}
                >New Drink</button>
            </form>

            {Object.keys(ingredients).map((ingredient) => (
                <div key={ingredient}>
                    <h3>{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</h3>
                    <div className="answer-space">
                        {inputs[ingredient]} 
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label={ingredient}
                        choices={ingredients[ingredient]}
                        checked={inputs[ingredient]}
                    />
                </div>
            ))}
        </div>
    );
  
};

export default BaristaForm;