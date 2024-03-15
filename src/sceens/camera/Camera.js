import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, Alert } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';

import { FontAwesome } from '@expo/vector-icons';

import * as MediaLibrary from "expo-media-library"

import * as ImagePicker from 'expo-image-picker';
import { Button, ButtonTitle, Buttoncam } from '../../components/button/Style';

export const CameraPage = ({ navigation }) => {
    const [imageSource, setImageSource] = useState(null);

    const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.front)
    const cameraRef = useRef(null)
    const [photo, setPhoto] = useState(null)
    const [openModal, setOpenModal] = useState(false)


    async function openImagePicker() {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert('Permissão negada para acessar a galeria');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (!pickerResult.cancelled) {
            setPhoto(pickerResult.uri);
            setOpenModal(true);
        }
    }


    useEffect(() => {
        (async () => {
            const { status: cameraStatus } =
                await Camera.requestCameraPermissionsAsync()

            const { status: mediaStatus } = MediaLibrary.requestPermissionsAsync()


        })()
    }, [])

    async function CapturePhoto() {
        if (cameraRef) {

            const photo = await cameraRef.current.takePictureAsync();

            setPhoto(photo.uri)

            setOpenModal(true)


            console.log(photo);
        }
    }

    function ClearPhoto() {
        setPhoto(null)

        setOpenModal(false)
    }

    async function SavePhoto() {
        if (photo) {
            await MediaLibrary.createAssetAsync(photo)
                .then(() => {
                    Alert.alert('Sucesso', 'Foto importada com sucesso');
                    navigation.navigate("ViewPrescription" , {photoUri: photo})
                }).catch(error => {
                    alert("Erro ao procesar foto")
                })
        }
    }

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                type={typeCamera} //tipo da câmera
                style={styles.camera} // estilo da câmera
                ratio={'16:9'}
            >
                <View style={styles.viewFlip}>

                    <TouchableOpacity
                        style={styles.btnBack}
                        onPress={() => navigation.replace("ViewPrescription")} >
                        <FontAwesome name='arrow-left' size={23} color={'#FFF'} />
                    </TouchableOpacity>

                    {/*Botão para trocar a câmera*/}
                    <TouchableOpacity style={styles.btnFlip} onPress={() => setTypeCamera(typeCamera == CameraType.front ? CameraType.back : CameraType.front)} >
                        <FontAwesome name='rotate-left' size={23} color={'#FFF'} />
                    </TouchableOpacity>
                </View>


            </Camera>
            <View style={styles.btns}>

                <TouchableOpacity style={styles.btnImage}
                    onPress={openImagePicker}
                >
                    <FontAwesome name='image' size={23} color={'#496BBA'} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCapture}
                    onPress={() => CapturePhoto()}
                >
                    <FontAwesome name='camera' size={23} color={'#FFF'} />

                </TouchableOpacity>
            </View>


            <Modal animationType='slide' transparent={false} visible={openModal}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>

                    <Image
                        style={{ width: '100%', height: 500, borderRadius: 10 }}
                        source={{ uri: photo }}
                    />

                    <View style={{ margin: 15, gap: 20 }}>

                        <Buttoncam onPress={SavePhoto} >
                            <ButtonTitle>
                                Salvar
                            </ButtonTitle>
                        </Buttoncam>

                        <TouchableOpacity style={styles.btnCancell}
                            onPress={() => ClearPhoto()}
                        >
                            <FontAwesome name='trash' size={50} color={'#496BBA'} />
                        </TouchableOpacity>


                        {/* <TouchableOpacity style={styles.btnUpload}
                            onPress={() => SavePhoto()}
                        >
                            <FontAwesome name='save' size={23} color={'#121212'} />

                        </TouchableOpacity> */}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '80%'
    },
    viewFlip: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'start',
        justifyContent: 'center'
    },
    btnFlip: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        padding: 15,

    },
    textFlip: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 20
    },
    btnCapture: {
        margin: 20,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#496BBA',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnCancell: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: 'transparent',

        alignItems: 'center',
        justifyContent: 'center'
    },
    btnUpload: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: 'transparent',

        alignItems: 'center',
        justifyContent: 'center'
    },
    btnBack: {
        position: 'absolute',
        bottom: 600,
        left: 20,
        padding: 15,
    },
    btns: {
        flexDirection: 'row',
        gap: 40
    },
    btnImage: {
        margin: 20,
        padding: 20,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: -80,
    }
});