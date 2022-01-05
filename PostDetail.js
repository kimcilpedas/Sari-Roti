const deleteData = async () => {
    try {
        const response = await fetch('http://10.0.2.2:3000/posts/id/'+itemId, {method:'DELETE'
        });
    } catch (error) {
        console.error(error);
    } finally {
        navigation.navigate('PostList');
    }
}