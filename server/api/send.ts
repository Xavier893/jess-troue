import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
	const to = getQuery(event).to
  const selected = getQuery(event).selected
  const name = getQuery(event).name
  const surname = getQuery(event).surname
  const plusOneSelected = getQuery(event).plusOneSelected
  const plusOneName = getQuery(event).plusOneName
  const plusOneSurname = getQuery(event).plusOneSurname
  const dietaryRestrictions = getQuery(event).dietaryRestrictions
  const songRequest = getQuery(event).songRequest

	try {
		const data = await resend.emails.send({
			from: 'Wedding <terra@terrabyte.software>',
			to: [`${to}`],
			subject: 'Wedding RSVP',
			html: `
              <h1>Wedding RSVP</h1><br><p>RSVP: ${selected}</p><br><p>Personal Details: ${name} ${surname}</p><br><p>Plus One: ${plusOneSelected}</p><br><p>Plus One Details: ${plusOneName} ${plusOneSurname}</p><br><p>Dietary Restrictions: ${dietaryRestrictions}</p><br><p>Song Request: ${songRequest}</p><br>
            `,
		})

		return data
	} catch (error) {
		return { error }
	}
})