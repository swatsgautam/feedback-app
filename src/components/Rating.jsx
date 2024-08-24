
const Rating = ({ onRatingChange, selectedRating }) => { 
    //callback function to handle change in rating and currentlr selected rating value


    //calls onRatingChange with new rating when ratio button is selected
    const handleChange = (event) => {
        onRatingChange(parseInt(event.target.value));
    };

    return (
        <div className="rating-container">
            <ul className="rating">
                {[...Array(10).keys()].map((i) => { 
                    //creates an empty array of length 10 and keys return an iterator of array keys which are then spread in to new array
                    //
                    const value = i + 1; //rating value starting from 1 instead of 0
                    return (
                        <li key={value}>
                            <input
                                type="radio"
                                id={`num${value}`} // assigns unique id 
                                name="rating"
                                value={value} //Sets the value of the radio button to the current rating value
                                checked={selectedRating === value} //Checks the radio button if selectedRating matches the current value
                                onChange={handleChange} 
                            />
                            
                            <label htmlFor={`num${value}`}>{value}</label> {/* label with the corresponding radio button using the id */}
                            
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Rating
