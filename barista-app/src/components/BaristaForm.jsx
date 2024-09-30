import {Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from '../data/drinks.json';

const BaristaForm = () => {

    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});

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
        setInputs({ // reset inputs
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        })
        getNextDrink() // get new drink
    }

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length) // get random drink index
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name) // set current drink given random index
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients) // set true recipe given random index
    }

    const onCheckAnswer = () => {
            
    }

    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">
                    {currentDrink}
                </h2>
                <button 
                    type="new-drink-button" 
                    className="button newdrink"
                    onClick={onNewDrink}
                >
                    🔄
                </button>
            </div>
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