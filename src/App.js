import Form from 'react-bootstrap/Form';
import {useState} from "react";

function App(){

    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <h3>Ein Tennisschläger und ein Ball kosten zusammen 110 CHF. Der Schläger ist genau 100 CHF teurer als der Ball. Wie teuer ist der Schläger?</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="radio"
                        value="10"
                        checked={selectedAnswer === '10'}
                        onChange={handleAnswerChange}
                    />
                    10 CHF
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="50"
                        checked={selectedAnswer === '50'}
                        onChange={handleAnswerChange}
                    />
                    50 CHF
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="105"
                        checked={selectedAnswer === '105'}
                        onChange={handleAnswerChange}
                    />
                    105 CHF
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="110"
                        checked={selectedAnswer === '110'}
                        onChange={handleAnswerChange}
                    />
                    110 CHF
                </label>
                <br />
                <button type="submit">Antwort überprüfen</button>
            </form>
        </div>

    );
};

export default App;
