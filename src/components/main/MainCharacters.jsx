import { useContext } from "react"
import {RAMContext} from '../../store/context'
import {MainCharacter} from './MainCharacter'

export function MainCharacters(){
    const {characters = []} = useContext(RAMContext)

    return (
        <div className="main__characters">
            {
                characters.map(character => {
                    return (
                        <MainCharacter
                        {...character}
                        key={character.id}
                        />
                    )
                })
            }
        </div>
    )
}