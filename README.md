# Hugo Theme Techdoc

A Hugo Theme for technical documentation. It was cloned from https://github.com/thingsym/hugo-theme-techdoc as a starting point for Business Application Development technical documentation.

## License

Licensed under the MIT License.

## Author

[thingsym](https://github.com/thingsym)

Copyright (c) 2017-2018 by thingsym

## Custom Shortcodes

### Diagrams
Diagrams are handled by the [Mermaid javascript library](https://mermaid-js.github.io/mermaid).

#### Parameters
No parameters.

#### Code example

```
{{< mermaid >}}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{{< /mermaid >}}
```

### Alert Panel

#### Parameters

**title**  
(optional)  
The title for the panel  

**status**  
(optional)  
The status for the panel  
Values: notice | success | caution | warning | danger  

**icon**  
(optional)  
The classes for a Font Awesome icon to appear inline with the title  
NOTE: This is not the same as the status icon  

[Panel Preview](/images/panels-example.png)

#### Code Examples

**With HTML / plain text content**

```
{{< panel title="Nas gavyn sikan sabé" >}}
R2-d2 carondian <strong>omwati</strong> xappyh. Panaka <em>bane</em> rune elrood aurra toydarian cerea. Binks dormé ken garm terrik wyl gev quarren.
{{< /panel >}}
```

**With markdown content**

```
{{% panel title="Nas gavyn sikan sabé" %}}
R2-d2 carondian **omwati** xappyh. Panaka *bane* rune elrood aurra toydarian cerea. Binks dormé ken garm terrik wyl gev quarren.
{{% /panel %}}
```

**With a title icon**

```
{{< panel title="Nas gavyn sikan sabé" icon="fas fa-download" >}}
R2-d2 carondian omwati xappyh. Panaka bane rune elrood aurra toydarian cerea. Binks dormé ken garm terrik wyl gev quarren.
{{< /panel >}}
```

**With a status**

```
{{< panel status="notice | success | caution | warning | danger" >}}
Nas gavyn sikan sabé. R2-d2 carondian omwati xappyh. Panaka bane rune elrood aurra toydarian cerea. Binks dormé ken garm terrik wyl gev quarren.
{{< /panel >}}
```

### Button

#### Parameters

**url**  
(optional)  
The URL for the button  

**status**  
(optional)  
The status for the button  
Values: notice | success | caution | warning | danger  

**icon**  
(optional)  
The classes for a Font Awesome icon  

#### Code Examples

**Default button**

```
{{< button url="#" >}}
    default
{{< /button >}}
```

**With an icon**

```
{{< button icon="fas fa-download" url="#" >}}
    icon
{{< /button >}}
```

**With a status**

```
{{< button status="primary | success | caution | warning | danger" >
    status
{{< /button >}}
```

### Custom Figure

The custom figure shortcode is an alternate to the built-in figure shortcode with added Image Processing to resize, fit, or fill the image. Pages that use the custom figure shortcode are expected to follow Page Bundles content organization and use Page Resources to define image sources.

* See https://gohugo.io/content-management/image-processing/ for more information on image processing.
* See https://gohugo.io/content-management/page-bundles/ for more information on page bundles.
* See https://gohugo.io/content-management/page-resources/ for more information on page resources.

#### Page Resources

To add an image resource to the page resources you’ll need to first define a resources element in the front matter if not already defined. Next you’ll need to add each image resource used in a custom figure shortcode to the page resources array. Each image resource should have the following elements:

**src**  
(required)  
The relative path to the image, will differ depending on if the page is a list or single page.  

**name**  
(required)  
The string used to identify and get the resource.  

**title**  
(optional)  
The title for the image. Will be used as the image alt text if no other alt text is provided and will be included in the caption.  

Example YAML front matter:
```yaml
resources:
- src: RelativePathImageSrc.png
  name: FriendlyImageName
  title: Figure 1.1
```

#### Parameters

**resource**  
(required)  
The name of the resource as defined in the Page Resources.  

**resize**  
(optional)  
The size to resize the image to.  

**fit**  
(optional)  
The size to scale the image to while maintaining aspect ratio.  

**fill**  
(optional)  
The size to resize and crop the image to.  

**link**  
(optional)  
The destination URL if the image should be hyperlinked. If not provided and the image resized, fitted, or filled the link will be to the original image.  

**target**  
(optional)  
The target for the hyperlink. The default is _blank.  

**rel**  
(optional)  
The hyperlink rel attribute.  

**alt**  
(optional)  
The image alt text. When not defined the image alt text will be the image resource title. If the image resource title is also undefined the image alt text will be the caption.  

**class**  
(optional)  
The class name to apply to the figure HTML element.  

**Notes:**

* The resize, fit, and fill parameters are mutually exclusive.
* The built-in figure shortcode src parameter was replaced by the resource property which determines the source.
* The built-in figure shortcode width and height parameters were replaced by the resize, fit, and fill parameters.
* The built-in figure shortcode caption, attr, and attrlink parameters were removed in favor of providing a caption by wrapping the caption text or markdown in open and close tags.

#### Code Examples

**With a plain text caption**

```
{{< customfigure resource="jpg-sample" resize="250x" alt="**alt** text" >}}
  An image with a plain text caption
{{</ customfigure >}}
```

**With a markdown caption**

```
{{% customfigure resource="jpg-sample" resize="250x" alt="**alt** text" %}}
  An image with a caption including **markdown**
{{%/ customfigure %}}
```
