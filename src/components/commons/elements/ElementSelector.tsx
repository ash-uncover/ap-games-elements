import React from 'react'
import { useClasseName, useClasses } from '@sol.ac/react-commons'
//
import { ElementData } from '../../../lib/data/elements'
import { ElementSelectorTile } from './ElementSelectorTile'
import { HexagonOrientation, HexagonOrientations } from '../hexagon/HexagonOrientation'
import { HexagonContainer } from '../hexagon/HexagonContainer'
// CSS
import './ElementSelector.css'

// #region Declaration
interface ElementSelectorProperties {
  className?: string
  style?: React.CSSProperties

  elements: ElementData[]
  orientation?: HexagonOrientation
  onElementClick: (element: ElementData) => void
  onElementHover: (element: ElementData | null) => void
}
// #endregion

// #region Component
export const ElementSelector = ({
  className,
  style,

  elements,
  orientation,
  onElementClick,
  onElementHover
}: ElementSelectorProperties) => {

  // #region > Hooks
  const [elementHover, setElementHover] = React.useState(null)
  const [elementRows, setElementRows] = React.useState<ElementData[][]>([])
  React.useEffect(() => {
    setElementRows([
      [elements[0], elements[1]],
      [elements[2], elements[3], elements[4]],
      [elements[5], elements[6]],
    ])
  }, [elements])

  const { classBuilder, classes } = useClasses(['ap-elements-element-selector'])
  useClasseName(classBuilder, className)
  React.useEffect(() => {
    let o = orientation || HexagonOrientations.VERTICAL
    classBuilder.add(`ap-elements-element-selector--${o.toLowerCase()}`)
    return () => {
      classBuilder.remove(`ap-elements-element-selector--${o.toLowerCase()}`)
    }
  }, [orientation])
  // #endregion

  // #region > Events
  function handleElementClick(element: ElementData) {
    onElementClick(element)
  }
  function handleElementMouseEnter(element: ElementData) {
    onElementHover(element)
    setElementHover(element)
  }
  function handleElementMouseLeave(element: ElementData) {
    if (elementHover === element) {
      onElementHover(null)
      setElementHover(null)
    }
  }
  // #endregion

  // #region > Render
  const size = '150px';
  return (
    <HexagonContainer
      className={classes}
      borderColor='transparent'
      borderWidth='5px'
      orientation={orientation}
      size={size}
      style={style}
    >
      {elementRows.map((elementRow, index) => {
        return (
          <div
            key={`row-${index}`}
            className='ap-elements-element-selector__row'
          >
            {elementRow.map(element => {
              return (
                <ElementSelectorTile
                  key={`element-${element.id}`}
                  color={element.color}
                  image={`/images/${element.id.toUpperCase()}-removebg-preview.png`}
                  name={element.name}
                  onClick={() => handleElementClick(element)}
                  onMouseEnter={() => handleElementMouseEnter(element)}
                  onMouseLeave={() => handleElementMouseLeave(element)}
                />
              )
            })}
          </div>
        )
      })}
    </HexagonContainer>
  )
  // #endregion
}
// #endregion
