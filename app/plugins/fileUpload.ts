import uniq from '~/plugins/uniq'

type uploadPhotoArgument = {
    storageRef: firebase.storage.Reference,
    uploadFile: Blob | Uint8Array | ArrayBuffer,
    metaObject: object,
}

export default async function fileUpload(uploadPhoto: uploadPhotoArgument) {
    try {
        await uploadPhoto.storageRef.put(uploadPhoto.uploadFile)
        const addMetadata = {
            customMetadata: {
                id: uniq(),
                ...uploadPhoto.metaObject
            }
        };
        await uploadPhoto.storageRef.updateMetadata(addMetadata)
        const url = await uploadPhoto.storageRef.getDownloadURL()
        const metaData = await uploadPhoto.storageRef.getMetadata()
        return {
            id: metaData.customMetadata.id,
            url,
        }
    } catch (error) {
        console.error(error)
    }
}