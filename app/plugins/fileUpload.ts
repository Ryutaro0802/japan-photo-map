import uniq from '~/plugins/uniq'

export default async function fileUpload({ storageRef, uploadFile, metaObject }) {
    try {
        await storageRef.put(uploadFile)
        const addMetadata = {
            customMetadata: {
                id: uniq(),
                ...metaObject
            }
        };
        await storageRef.updateMetadata(addMetadata)
        const url = await storageRef.getDownloadURL()
        const metaData = await storageRef.getMetadata()
        return {
            id: metaData.customMetadata.id,
            url,
        }
    } catch (error) {
        console.error(error)
    }
}