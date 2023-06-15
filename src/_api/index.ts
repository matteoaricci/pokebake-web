export async function fetchGraphQL(query: string, variables: { [key: string]: string }, operationName: string) {
    const result = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
        method: "POST",
        body: JSON.stringify({
            query, variables, operationName
        })
    })

    return await result.json()
}

export * from "./pokemon"