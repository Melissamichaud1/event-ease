// Get the cookie out of the cookie store
const payloadCookie = await cookieStore.get("jwt_access_payload")
if (payloadCookie) {
// The cookie value is a JSON-formatted string, so parse it
//   const encodedPayload = JSON.parse(payloadCookie.value);

// Convert the encoded payload from base64 to normal string
const decodedPayload = atob(payloadCookie.value)

// The payload is a JSON-formatted string, so parse it
const payload = JSON.parse(decodedPayload)

// Print the payload
console.log(payload);

// Check if "events.add_conference" is in the permissions.
// If it is, remove 'd-none' from the link
if (payload.user.perms.includes("events.add_conference") && (payload.user.perms.includes("events.add_location"))) {
    const locationLinkTag = document.getElementById('hidden-location')
    locationLinkTag.classList.remove("d-none")
    const conferenceLinkTag = document.getElementById('hidden-conference')
    conferenceLinkTag.classList.remove("d-none")
    const presentationLinkTag = document.getElementById('hidden-presentation')
    presentationLinkTag.classList.remove("d-none")
}

}
