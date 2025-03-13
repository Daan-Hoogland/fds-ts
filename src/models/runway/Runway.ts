import { Organization } from '../organization/EOrganization'
import { OrganizationValue } from '../organization/OrganizationValue'

export class Runway {
    private _destination: OrganizationValue
    private _origin: OrganizationValue
    private _destinationOriginalValue?: string
    private _originOriginalValue?: string

    constructor(destinationIata: string, destinationIcao: string, originIata: string, originIcao: string) {
        this._destination = new OrganizationValue(destinationIata, destinationIcao)
        this._origin = new OrganizationValue(originIata, originIcao)
        this._destinationOriginalValue = `${destinationIata}-${destinationIcao}`
        this._originOriginalValue = `${originIata}-${originIcao}`
    }

    public get destination(): OrganizationValue {
        return this._destination
    }

    public set destination(value: OrganizationValue) {
        this._destination = value
    }

    public getDestination(org?: Organization) {
        return org ? this.destination.get(org) : this.destination.get(Organization.ICAO)
    }

    public get origin(): OrganizationValue {
        return this._origin
    }

    public set origin(value: OrganizationValue) {
        this._origin = value
    }

    public getOrigin(org?: Organization) {
        return org ? this.origin.get(org) : this.destination.get(Organization.ICAO)
    }

    public get destinationOriginalValue(): string | undefined {
        return this._destinationOriginalValue
    }

    private set destinationOriginalValue(value: string) {
        this._destinationOriginalValue = value
    }

    public get originOriginalValue(): string | undefined {
        return this._originOriginalValue
    }

    private set originOriginalValue(value: string) {
        this._originOriginalValue = value
    }
}
