import { Organization } from './EOrganization'

export class OrganizationValue {
    private _iata: any
    private _icao: any

    constructor(iata: any, icao: any) {
        this._iata = iata
        this._icao = icao
    }

    public get(org: Organization): any {
        switch (org) {
            case Organization.IATA:
                return this._iata
            case Organization.ICAO:
                return this._icao
            default:
                throw new Error('Unsupported organization')
        }
    }

    public set(value: any, org: Organization): void {
        if (org === Organization.IATA) {
            this._iata = value
        } else if (org === Organization.ICAO) {
            this._icao = value
        } else {
            throw new Error('Unsupported organization')
        }
    }
}
