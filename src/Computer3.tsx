import { Html } from "@react-three/drei"
import { useState } from "react"
import Window98 from "react-ninetyeight"
import icon from './assets/logo-DA53tF8t.png'

import shut_icon from './assets/shut_down_normal-4.png'
const Computer3 = (props: any) => {
  const colors = [ 'lime', 'red', 'pink', 'royalBlue']
  const [current, setCurrent] = useState(0)
  const propagateColor = () => {
    const nextColor = current + 1 < colors.length ? current + 1 : 0
    setCurrent(nextColor)
    props.changeColor(colors[nextColor])
  }
  return (
    <>
      <Html
        scale={[.8, .8, .8]}
        position={[0, -0.2, -0.48]}
        style={{
          borderRadius: '50px',
          textAlign: 'center',
          animation: 'flicker 0.7s infinite alternate',
        }}
        as='div'>
        <Window98
          icon={icon}
          actions={['minimize', 'close']}
          width={"500px"}
          color={'#003303'}
          color2={'#517866'}
          title={'Settings'}
          content={
            <>
              <div style={{ maxHeight: '100px', padding: '1px', gap: '20px', display: 'flex', height: '300px' }}>
                <button
                  onClick={() => { propagateColor() }}
                  style={{
                    padding: '10px',
                    borderRight: '3px solid black',
                    borderBottom: '3px solid black',
                    borderTop: '2px solid white',
                    borderLeft: '2px solid white',
                    justifyItems: 'center',
                    backgroundColor: '#c3c3c3',
                    borderRadius: '0'
                  }}>
                  <strong style={{ color: 'black' }}>color</strong>
                  <div style={{ width: '50px', height: '50px', backgroundColor: colors[current] }}></div>
                </button>
                <button style={{
                  padding: '10px',
                  justifyItems: 'center',
                  borderRight: '3px solid black',
                  borderBottom: '3px solid black',
                  borderTop: '2px solid white',
                  borderLeft: '2px solid white',
                  backgroundColor: '#c3c3c3',
                  borderRadius: '0'
                }}>
                  <strong style={{ color: 'black' }}>language</strong>
                </button>

                <button style={{
                  padding: '10px',
                  justifyItems: 'center',
                  borderRight: '3px solid black',
                  borderBottom: '3px solid black',
                  borderTop: '2px solid white',
                  borderLeft: '2px solid white',
                  backgroundColor: '#c3c3c3',
                  borderRadius: '0'
                }}>
                  <strong style={{ color: 'black' }}>
                    <img onClick={props.onShut} src={shut_icon}/>
                  </strong>
                </button>
              </div>
            </>
          }
        />
      </Html>
    </>
  )
}

export default Computer3
