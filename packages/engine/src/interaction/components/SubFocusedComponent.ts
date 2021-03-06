import { Entity } from '../../ecs/classes/Entity'
import { createMappedComponent } from '../../ecs/functions/EntityFunctions'

/**
 * @author HydraFire <github.com/HydraFire>
 */

export type SubFocusedType = {
  subInteracts: Entity
}

export const SubFocusedComponent = createMappedComponent<SubFocusedType>()
