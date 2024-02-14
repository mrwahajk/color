import {useState} from 'react'
const ColorBox = () => {

    const [color, setColor] = useState('');
    return(
        <div>
            <div className="box" style={{height: '100px',width: '100px',backgroundColor: color,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                <p>{color}</p>
            </div>
            <input
                type='text'
                placeholder="enter a color"
                onChange={(e) => setColor(e.target.value)}
            />
        </div>
    )
}

export default ColorBox