import { OrganizationJsonLd } from 'next-seo'
import { routes } from '@/config/index'

const SeoOrganizationJsonLd = () => {
  return (
    <>
      <OrganizationJsonLd
        organizationType='EducationalOrganization'
        id={routes.front.root}
        logo={`${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`}
        legalName={company.fullName}
        name={company.name}
        address={{
          streetAddress: `${company.address.street.typeShort} ${company.address.street.name} ${company.address.street.door}, ${company.address.street.room}`,
          addressLocality: company.address.city,
          postalCode: company.address.zip,
          addressCountry: company.address.countryCode
        }}
        contactPoints={[
          {
            telephone: company.phoneNumber.val,
            contactType: company.phoneNumber.contactType,
            areaServed: 'US',
            availableLanguage: company.languages
          }
        ]}
        sameAs={[routes.front.root]}
        url={routes.front.root}
      />
    </>
  )
}

export default SeoOrganizationJsonLd
