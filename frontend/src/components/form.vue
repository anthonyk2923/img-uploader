<template>
    <div>
        <div class="p-3 m-3">
            <div class="mx-auto col-10 col-md-8 col-lg-6 bg-light shadow-lg p-3" style="width: 40%">
                <!-- Form -->
                <div class=" p-4">
                    <form action="/api/img" method="POST" enctype="multipart/form-data">
                        <h1 align=center>Upload a Img</h1>
                        <p class="description" align='center'>
                            Ensure the image is a .png, .jpg, .jpeg, or .gif
                        </p>
                        <!-- Input fields -->
                        <div class="form-group">
                            <label for="file">Image:</label>
                            <input type="file" accept="image/*" class="form-control file" id="file"
                                placeholder="Username..." name="file" required />
                        </div>
                        <div class="form-group">
                            <label for="caption">Caption:</label>
                            <input type="text" class="form-control caption" id="caption" placeholder="Caption..."
                                name="caption" required />
                        </div>
                        <div class="form-group">
                            <label for="color">Image backround: </label>
                            <input type="color" style="width: 100%;" id="color" name="color" value="#f8f9fa">
                        </div>

                        <button type="submit" class="btn btn-primary mt-4 p-2 m-1">

                            Submit
                        </button>
                        <BtnToggle type="button" @showFormButton="$emit('showFormButton')" :btnClass="btnClass"
                            btnText="Hide Form" class="mt-4 p-2 m-1" />
                    </form>

                </div>

            </div>
            <hr>
            <div id="tag-id"></div>
            <!-- Form end -->
        </div>
    </div>
</template>

<script>
import BtnToggle from "./btnToggle"
export default {
    name: "Form",
    components: {
        BtnToggle
    },
    props: {
        btnClass: String
    }

}
</script>

<style scoped></style>
