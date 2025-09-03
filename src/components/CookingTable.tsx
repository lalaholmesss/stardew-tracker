import { useEffect, useState } from "react";
import recipes from "../data/recipes";
import type { Recipe } from "../data/recipes";

interface CookingTableProps {
    recipeData?: Recipe[];
}

export default function CookingTable({recipeData = recipes}: CookingTableProps) {
    const [learned, setLearned] = useState<Record<string, boolean>>(() => {
        const saved = localStorage.getItem('is-learned'); 
        return saved ? JSON.parse(saved) : {}; // getting the value - key pairs of the object - contains only key - values that user checked
    });
    
    const [cooked, setCooked] = useState<Record<string, boolean>>(() => {
        const saved = localStorage.getItem('is-cooked');
        return saved ? JSON.parse(saved) : {};
    });

    function checkedLearned(recipeId: number) {
        setLearned(prev => ({
            ...prev,
            [recipeId]: !prev[recipeId]
        }));
    }

    function checkedCooked(recipeId: number) {
        setCooked(prev => ({
            // prev here is current state
            ...prev, // copies the object
            [recipeId]: !prev[recipeId]
            // setting the value for recipeId
        }));
    }

    useEffect(() => {
        localStorage.setItem('is-learned', JSON.stringify(learned));
    }, [learned]);

    useEffect(() => {
        localStorage.setItem('is-cooked', JSON.stringify(cooked));
    }, [cooked]);

    return(
        <div className=''>
            <table className='bg-white border-separate border-spacing-1 p-1 border-lightblue border max-w-2xl mx-auto'>
                <thead>
                    <tr className='bg-green text-white text-base '>
                       <th className='border-lightblue border py-2 px-2 font-normal'>Name</th>
                       <th className='border-lightblue border py-2 px-2 font-normal'>Ingredients</th>
                       <th className='border-lightblue border py-2 px-2 font-normal'>Learned</th>
                       <th className='border-lightblue border py-2 px-2 font-normal'>Cooked</th>
                    </tr>
                </thead>
                <tbody>
                    {recipeData.map((recipe) => (
                        <tr key={recipe.id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">
                                <div className="flex items-center gap-3">
                                    <img 
                                        src={recipe.img} 
                                        alt={recipe.name}
                                        className="w-12 h-12 object-contain"
                                    />
                                    <span className="text-base text-darkblue">{recipe.name}</span>
                                </div>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc list-inside space-y-1">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={`${recipe.id}-ingredient-${index}`} className="text-base">
                                            {ingredient }  
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                <input 
                                    type="checkbox" 
                                    defaultChecked={recipe.isLearned}
                                    className="w-4 h-4"
                                    checked={learned[recipe.id] ?? recipe.isLearned ?? false}
                                    onChange={() => checkedLearned(recipe.id)}
                                />
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                <input 
                                    type="checkbox" 
                                    checked={cooked[recipe.id] ?? recipe.isCooked ?? false}
                                    className="w-4 h-4"
                                    onChange={() => checkedCooked(recipe.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}