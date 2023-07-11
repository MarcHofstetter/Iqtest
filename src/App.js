import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import './App.css'

function App() {
    const [logicalAnswer, setLogicalAnswer] = useState('');
    const [kinaestheticAnswer, setKinaestheticAnswer] = useState('');
    const [naturalisticAnswer, setNaturalisticAnswer] = useState('');
    const [visualMusicAnswer, setVisualMusicAnswer] = useState('');
    const [musicalMusicAnswer, setMusicalMusicAnswer] = useState('');
    const [linguisticAnswer, setLinguisticAnswer] = useState('');
    const [intrapersonalAnswer, setIntrapersonalAnswer] = useState('');
    const [interpersonalAnswer, setInterpersonalAnswer] = useState('');
    const [funAnswer, setFunAnswer] = useState('')
    const [showResults, setShowResults] = useState(false);

    const [logicalScore, setLogicalScore] = useState(0);
    const [kinaestheticScore, setKinaestheticScore] = useState(0);
    const [naturalisticScore, setNaturalisticScore] = useState(0);
    const [visualScore, setVisualScore] = useState(0);
    const [musicalScore, setMusicalScore] = useState(0);
    const [linguisticScore, setLinguisticScore] = useState(0);
    const [intrapersonalScore, setIntrapersonalScore] = useState(0);
    const [interpersonalScore, setInterpersonalScore] = useState(0);
    const [funScore, setFunScore] = useState(0);

    const handleLogicalAnswerChange = (e) => {
        setLogicalAnswer(e.target.value);
    };

    const handleKinaestheticAnswerChange = (e) => {
        setKinaestheticAnswer(e.target.value);
    };

    const handleNaturalisticAnswerChange = (e) => {
        setNaturalisticAnswer(e.target.value);
    };

    const handleVisualMusicAnswerChange = (e) => {
        setVisualMusicAnswer(e.target.value);
    };

    const handleMusicalMusicAnswerChange = (e) => {
        setMusicalMusicAnswer(e.target.value);
    };

    const handleLinguisticAnswerChange = (e) => {
        setLinguisticAnswer(e.target.value);
    };

    const handleIntrapersonalAnswerChange = (e) => {
        setIntrapersonalAnswer(e.target.value);
    };

    const handleInterpersonalAnswerChange = (e) => {
        setInterpersonalAnswer(e.target.value);
    };
    const handleFunAnswerChange = (e) => {
        setFunAnswer(e.target.value);
    };

    const handleResultsClick = (e) => {
        e.preventDefault();
        if (
            logicalAnswer &&
            kinaestheticAnswer &&
            naturalisticAnswer &&
            visualMusicAnswer &&
            musicalMusicAnswer &&
            linguisticAnswer &&
            intrapersonalAnswer &&
            interpersonalAnswer &&
            funAnswer
        ) {
            calculateScores();
            setShowResults(true);
        } else {
            alert('Bitte füllen Sie alle Felder aus, um die Ergebnisse anzuzeigen.');
        }
    };

    const calculateScores = () => {
        let logicalScore = 0;
        let kinaestheticScore = 0;
        let naturalisticScore = 0;
        let visualScore = 0;
        let musicalScore = 0;
        let linguisticScore = 0;
        let intrapersonalScore = 0;
        let interpersonalScore = 0;
        let funScore = 0;

        if (logicalAnswer === 'd') {
            logicalScore = 100;
        }

        if (kinaestheticAnswer === 'c') {
            kinaestheticScore = 100;
        }

        if (naturalisticAnswer === 'a') {
            naturalisticScore = 100;
        }

        if (visualMusicAnswer === 'a') {
            visualScore = 100;
        }

        if (musicalMusicAnswer === 'd') {
            musicalScore = 100;
        }

        if (linguisticAnswer === 'a') {
            linguisticScore = 100;
        }

        if (intrapersonalAnswer === 'b') {
            intrapersonalScore = 100;
        }

        if (interpersonalAnswer === 'd') {
            interpersonalScore = 100;
        }
        if (funAnswer === 'c') {
            funScore = 100;
        }

        setLogicalScore(logicalScore);
        setKinaestheticScore(kinaestheticScore);
        setNaturalisticScore(naturalisticScore);
        setVisualScore(visualScore);
        setMusicalScore(musicalScore);
        setLinguisticScore(linguisticScore);
        setIntrapersonalScore(intrapersonalScore);
        setInterpersonalScore(interpersonalScore);
        setFunScore(funScore)
    };

    return (
        <div>
            <h2 id="title">Ultra IQ test</h2>
            <Form>
                <Form.Group controlId="logical" id="formgroup">
                    <Form.Label id="frage">Welche Zahl vervollständigt die Reihe: 0, 1, 1, 2, 3, 5, ...?</Form.Label>
                    <Form.Control as="select" value={logicalAnswer} onChange={handleLogicalAnswerChange} id="control">
                        <option value="">Auswählen</option>
                        <option value="a">5</option>
                        <option value="b">6</option>
                        <option value="c">7</option>
                        <option value="d">8</option>
                    </Form.Control>
                </Form.Group>



                <Form.Group controlId="kinaesthetic" id="formgroup">
                    <Form.Label id="frage">Was ist Kinaesthetic?</Form.Label>
                    <Form.Control id="control"
                        as="select"
                        value={kinaestheticAnswer}
                        onChange={handleKinaestheticAnswerChange}
                    >
                        <option value="">Auswählen</option>
                        <option value="a">Die Fähigkeit, Emotionen anderer Menschen zu erkennen und zu verstehen
                        </option>
                        <option value="b">Die Fähigkeit, logische Zusammenhänge und Problemlösungen zu erkennen</option>
                        <option value="c">Die Fähigkeit, Bewegungen und körperliche Aktivitäten geschickt auszuführen
                        </option>
                        <option value="d">Die Fähigkeit, komplexe mathematische Operationen durchzuführen</option>
                    </Form.Control>
                </Form.Group>



                <Form.Group controlId="naturalistic" id="formgroup">
                    <Form.Label id="frage">Was ist das Studium von Pflanzen und Tieren in ihrer natürlichen
                        Umgebung?</Form.Label>
                    <Form.Control id="control"
                        as="select"
                        value={naturalisticAnswer}
                        onChange={handleNaturalisticAnswerChange}
                    >
                        <option value="">Auswählen</option>
                        <option value="a">Biologie</option>
                        <option value="b">Geographie</option>
                        <option value="c">Zoologie</option>
                        <option value="d">Botanik</option>
                    </Form.Control>
                </Form.Group>



                <Form.Group controlId="visualMusic" id="formgroup">
                    <Form.Label id="frage">Welches ist ein Holzblasinstrument?</Form.Label>
                    <Form.Control id="control"
                        as="select"
                        value={visualMusicAnswer}
                        onChange={handleVisualMusicAnswerChange}
                    >
                        <option value="">Auswählen</option>
                        <option value="a">Saxophon</option>
                        <option value="b">Posaune</option>
                        <option value="c">Geige</option>
                        <option value="d">Trompete</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="musicalMusic" id="formgroup">
                    <Form.Label id="frage">Welche Art von Intelligenz ist besonders bei Musikern
                        ausgeprägt?</Form.Label>
                    <Form.Control id="control"
                        as="select"
                        value={musicalMusicAnswer}
                        onChange={handleMusicalMusicAnswerChange}
                    >
                        <option value="">Auswählen</option>
                        <option value="a">Soziale Intelligenz</option>
                        <option value="b">Logisch-mathematische Intelligenz</option>
                        <option value="c">Körperliche Intelligenz</option>
                        <option value="d">Musikalische Intelligenz</option>
                    </Form.Control>
                </Form.Group>



                <Form.Group controlId="linguistic" id="formgroup">
                    <Form.Label id="frage">Welche Aktivität ist am besten geeignet, um die sprachliche
                        Intelligenz zu fördern?</Form.Label>
                    <Form.Control id="control"
                        as="select"
                        value={linguisticAnswer}
                        onChange={handleLinguisticAnswerChange}
                    >
                        <option value="">Auswählen</option>
                        <option value="a">Lesen eines Buches</option>
                        <option value="b">Lösen von mathematischen Problemen</option>
                        <option value="c">Malen eines Bildes</option>
                        <option value="d">Musikinstrument spielen</option>
                    </Form.Control>
                </Form.Group>




                <Form.Group controlId="intrapersonal" id="formgroup">
                    <Form.Label id="frage">Welche Aktivität würde jemand mit ausgeprägter intrapersonaler
                        Intelligenz wahrscheinlich am meisten genießen?</Form.Label>
                    <Form.Control id="control"
                        as="select"
                        value={intrapersonalAnswer}
                        onChange={handleIntrapersonalAnswerChange}
                    >
                        <option value="">Auswählen</option>
                        <option value="a">An Mannschaftssportarten teilnehmen</option>
                        <option value="b">In ein persönliches Tagebuch schreiben</option>
                        <option value="c">An sozialen Veranstaltungen teilnehmen</option>
                        <option value="d">Ein Musikinstrument spielen</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="interpersonal" id="formgroup">
                    <Form.Label id="frage">Welche Art von Intelligenz ist besonders bei Lehrern und
                        Beratern ausgeprägt?</Form.Label>
                    <Form.Control id="control"
                        as="select"
                        value={interpersonalAnswer}
                        onChange={handleInterpersonalAnswerChange}

                    >
                        <option value="">Auswählen</option>
                        <option value="a">Räumliche Intelligenz</option>
                        <option value="b">Logisch-mathematische Intelligenz</option>
                        <option value="c">Körperliche Intelligenz</option>
                        <option value="d">Interpersonale Intelligenz</option>
                    </Form.Control>
                </Form.Group>




                <Form.Group id="formgroup" controlId="fun">
                    <Form.Label id="frage">Was ist der Beste weg um Python zu lernen</Form.Label>
                    <Form.Control id="control"
                                  as="select"

                                  onChange={handleInterpersonalAnswerChange}

                    >
                        <option value="">Auswählen</option>
                        <option value="a">Turtorials von Inter anschauen</option>
                        <option value="b">Im internet seiten suchen</option>
                        <option value="c">Gegen einen Python kämpfen</option>
                        <option value="d">Einen Online kurs besuchen</option>
                    </Form.Control>
                </Form.Group>






                <button onClick={handleResultsClick} id="result">
                    Ergebnisse anzeigen
                </button>
            </Form>

            {showResults && (
                <div>
                    <h3>Ergebnisse:</h3>
                    <p>Logisch-mathematische Intelligenz: {logicalScore}</p>
                    <p>Körperliche Intelligenz: {kinaestheticScore}</p>
                    <p>Natürliche Intelligenz: {naturalisticScore}</p>
                    <p>Visuelle Intelligenz: {visualScore}</p>
                    <p>Musikalische Intelligenz: {musicalScore}</p>
                    <p>Sprachliche Intelligenz: {linguisticScore}</p>
                    <p>Intrapersonale Intelligenz: {intrapersonalScore}</p>
                    <p>Interpersonale Intelligenz: {interpersonalScore}</p>
                    <p>Fun: {funScore}</p>

                </div>
            )}
        </div>
    );
}

export default App;
