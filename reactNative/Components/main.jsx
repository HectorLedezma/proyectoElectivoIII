


const MainPage = () => {
    return(
      <NativeBaseProvider>
        <Box>Hello world</Box>
      </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#C0C0C0'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default MainPage