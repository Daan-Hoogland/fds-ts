import { OrganizationValue } from '../../../src/models/organization/OrganizationValue'
import { Organization } from '../../../src/models/organization/EOrganization'

describe('OrganizationValue class object creation', () => {
    it('should be a newly created OrganizationValue with the values assigned in the constructor.', () => {
        const value = new OrganizationValue('AMS', 'EHAM')
        expect(value.get(Organization.IATA)).toBe('AMS')
        expect(value.get(Organization.ICAO)).toBe('EHAM')
    })
})

describe('OrganizationValue class object editing', () => {
    it('should have the correct updated value for the ICAO property', () => {
        const value = new OrganizationValue('AMS', 'EHLW')
        value.set('EHAM', Organization.ICAO)
        expect(value.get(Organization.IATA)).toBe('AMS')
        expect(value.get(Organization.ICAO)).toBe('EHAM')
    })
    it('should have the correct updated value for the IATA property', () => {
        const value = new OrganizationValue('LWR', 'EHAM')
        value.set('AMS', Organization.IATA)
        expect(value.get(Organization.IATA)).toBe('AMS')
        expect(value.get(Organization.ICAO)).toBe('EHAM')
    })
})
