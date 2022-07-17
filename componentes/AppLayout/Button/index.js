import { colors } from '../../../styles/themes'

export default function Button ({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
                button{
                    padding: 0.3rem 0.8rem;
                    background: ${colors.black};
                    color: ${colors.white};
                    border-radius: 9999px;
                    border: 0;
                    cursor: pointer;
                    transition: opacity .5 ease-out;
                }
                button:hover{
                    opacity: .7
                }
                `}
      </style>
    </>
  )
}
