import { useEffect, useState } from "react"
import { telecomandi } from "../defines/remotes"
import { Remote, RemoteProgrammingMethod, RemotesPerBrand } from "../models/remoteModel"

export const useRemotes = () => {
    const [remotes, setRemotes] = useState<Remote[]>([])
    const [filter, setFilter] = useState<string>("")

    const [remotesPerBrand, setRemotesPerBrand] = useState<RemotesPerBrand[]>()

    useEffect(() => {
        setRemotes([])

        var remotes_to_return: Remote[] = []

        for (const marca in telecomandi) {

            for (const programming_mode in telecomandi[marca]) {
                if (programming_mode === "Diretto") {
                    for (var remote_model_index in telecomandi[marca]['Diretto'].split('/')) {
                        if (
                            telecomandi[marca]['Diretto'].split('/')[remote_model_index].toUpperCase().includes(filter.toUpperCase()) ||
                            marca.toUpperCase().includes(filter.toUpperCase())
                        ) {
                            remotes_to_return.push(
                                new Remote(
                                    marca,
                                    telecomandi[marca]['Diretto'].split('/')[remote_model_index],
                                    RemoteProgrammingMethod.diretto
                                )
                            )
                        }
                    }
                } else if (programming_mode === "Ricevente") {
                    for (var remote_model_index in telecomandi[marca]['Ricevente'].split('/')) {
                        if (
                            telecomandi[marca]['Ricevente'].split('/')[remote_model_index].toUpperCase().includes(filter.toUpperCase()) ||
                            marca.toUpperCase().includes(filter.toUpperCase())
                        ) {
                            remotes_to_return.push(
                                new Remote(
                                    marca,
                                    telecomandi[marca]['Ricevente'].split('/')[remote_model_index],
                                    RemoteProgrammingMethod.agire_in_ricevente
                                )
                            )
                        }
                    }
                } else if (programming_mode === "Autoapprendimento") {
                    for (var remote_model_index in telecomandi[marca]['Autoapprendimento'].split('/')) {
                        if (
                            telecomandi[marca]['Autoapprendimento'].split('/')[remote_model_index].toUpperCase().includes(filter.toUpperCase()) ||
                            marca.toUpperCase().includes(filter.toUpperCase())
                        ) {
                            remotes_to_return.push(
                                new Remote(
                                    marca,
                                    telecomandi[marca]['Autoapprendimento'].split('/')[remote_model_index],
                                    RemoteProgrammingMethod.autoapprendimento
                                )
                            )
                        }
                    }
                }

            }

        }

        setRemotes(remotes_to_return)

    }, [filter])

    useEffect(() => {

        setRemotesPerBrand([])

        var remotes_per_brand_to_return: RemotesPerBrand[] = []

        for (var remote in remotes) {
            var appendToCategory = false

            // Check if already exist category
            for (var remote_category_index in remotes_per_brand_to_return) {
                if (remotes_per_brand_to_return[parseInt(remote_category_index)].brand === remotes[remote].brand)
                    appendToCategory = true

                if (appendToCategory) {
                    remotes_per_brand_to_return[parseInt(remote_category_index)].remotes.push(remotes[remote])
                }

            }

            if (!appendToCategory) {

                remotes_per_brand_to_return.push(new RemotesPerBrand(
                    remotes[remote].brand,
                    [remotes[remote]]
                ))
            }
        }

        setRemotesPerBrand(remotes_per_brand_to_return)
    }, [remotes])

    return [
        remotes as Remote[],
        setFilter as (filter: string) => void,
        remotesPerBrand as RemotesPerBrand[]
    ]
}