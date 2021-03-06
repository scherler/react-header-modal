react-header-modal
==============

React Header-modal is a simple react component for modals and dialogs.
Powerful, lightweight and customizable design. 
It is based on https://github.com/marcio/react-skylight but re-written 
to use header and body.

[![NPM][npm-icon] ][npm-url]

[![Travis CI][travis-ci-image] ][travis-ci-url]
[![Coverage Status](https://coveralls.io/repos/github/scherler/react-header-modal/badge.svg?branch=master)](https://coveralls.io/github/scherler/react-header-modal?branch=master)
[![Quality][quality-badge] ][quality-url]
[![dependencies][dependencies-image] ][dependencies-url]
[![devdependencies][devdependencies-image] ][devdependencies-url]

[npm-icon]: https://nodei.co/npm/react-header-modal.png?downloads=true
[npm-url]: https://npmjs.org/package/react-header-modal
[travis-ci-image]: https://travis-ci.org/scherler/react-header-modal.svg?branch=master
[travis-ci-url]: https://travis-ci.org/scherler/react-header-modal

[dependencies-image]: https://david-dm.org/scherler/react-header-modal.png
[dependencies-url]: https://david-dm.org/scherler/react-header-modal
[devdependencies-image]: https://david-dm.org/scherler/react-header-modal/dev-status.png
[devdependencies-url]: https://david-dm.org/scherler/react-header-modal#info=devDependencies

[quality-badge]: http://npm.packagequality.com/shield/react-header-modal.svg
[quality-url]: http://packagequality.com/#?package=react-header-modal

Installation
------------

```sh
npm i --save react-header-modal
```

License
-------

License is [MIT](./LICENSE)


Features
--------

- Very simple modal/dialog
- Callback before open
- Callback after open
- Callback before close
- Callback after close
- Callback on overlay click
- All styles can be overridden or not used at all


Proptypes
---------

```
ModalView.propTypes = {
    afterClose: PropTypes.func,
    afterOpen: PropTypes.func,
    beforeClose: PropTypes.func,
    beforeOpen: PropTypes.func,

    title: PropTypes.string,
    body: PropTypes.string,
    children: PropTypes.object,

    onOverlayClicked: PropTypes.func,
    hideOnOverlayClicked: PropTypes.bool,
    showOverlay: PropTypes.bool,
    isVisible: PropTypes.bool,

    styles: React.PropTypes.oneOfType([
        PropTypes.shape({
            closeButtonStyle: PropTypes.object,
            dialogStyles: PropTypes.object,
            overlayStyles: PropTypes.object,
            titleStyle: PropTypes.object
        }),
        PropTypes.bool,
    ]),

}
```

How to use
--------------------

```
import ModalView from 'react-header-modal';

<ModalView />
```

Default view.

![default](./screenshot/default.png "default")

```
import ModalView from 'react-header-modal';

<ModalView 
  hideOnOverlayClicked
  title="Hi, xxx modal"
  body="Simple Text"
/>
```

Simplest use is to pass the title and the body as an attribute.

![simplest](./screenshot/simple.png "simplest")

```
import ModalView, {Body, Header} from 'react-header-modal';

<ModalView hideOnOverlayClicked>
    <Header>
        <ul>
            <li>Lorem ipsum dolor sit amet, impetus dissentiunt vix ne. Vix accumsan adipisci no, ius no
                populo voluptaria, no eam viderer appareat persequeris. Ex harum tollit nullam mea. Mei
                sanctus placerat ut, ad mei recusabo instructior, quo eu nonumes deleniti principes. Ceteros
                oportere aliquando ei pro, et dolores forensibus quo, te zril adolescens vix. Pro at illum
                dicit referrentur, fabellas conclusionemque ne nam.
            </li>
            ...
            <li>Lorem ipsum dolor sit amet, impetus dissentiunt vix ne. Vix accumsan adipisci no, ius no
                populo voluptaria, no eam viderer appareat persequeris. Ex harum tollit nullam mea. Mei
                sanctus placerat ut, ad mei recusabo instructior, quo eu nonumes deleniti principes. Ceteros
                oportere aliquando ei pro, et dolores forensibus quo, te zril adolescens vix. Pro at illum
                dicit referrentur, fabellas conclusionemque ne nam.
            </li>
    
        </ul>
    </Header>
    <Body>
        <ul>
            <li>Lorem ipsum dolor sit amet, impetus dissentiunt vix ne. Vix accumsan adipisci no, ius no
                populo voluptaria, no eam viderer appareat persequeris. Ex harum tollit nullam mea. Mei
                sanctus placerat ut, ad mei recusabo instructior, quo eu nonumes deleniti principes. Ceteros
                oportere aliquando ei pro, et dolores forensibus quo, te zril adolescens vix. Pro at illum
                dicit referrentur, fabellas conclusionemque ne nam.
            </li>
            ...
            <li>Lorem ipsum dolor sit amet, impetus dissentiunt vix ne. Vix accumsan adipisci no, ius no
                populo voluptaria, no eam viderer appareat persequeris. Ex harum tollit nullam mea. Mei
                sanctus placerat ut, ad mei recusabo instructior, quo eu nonumes deleniti principes. Ceteros
                oportere aliquando ei pro, et dolores forensibus quo, te zril adolescens vix. Pro at illum
                dicit referrentur, fabellas conclusionemque ne nam.
            </li>
    
        </ul>
    </Body>
</ModalView>
```

You can pass anything to header and body.

![head_body_lot](./screenshot/head_body_lot.png "head_body_lot")

```
import ModalView from 'react-header-modal';

<ModalView 
  hideOnOverlayClicked
  title="Hi, xxx modal"
  body="Simple Text"
  styles={{
    contentStyle: {
      backgroundColor: '#767535'
    }
  }}
/>
```

Simply override the default styles or turn them off (`styles={false}`) 
and use the class name hooks for add the styling.

![style](./screenshot/style.png "style")

```
import ModalView from 'react-header-modal';

<ModalView 
  hideOnOverlayClicked
  title="Hi, xxx modal"
  body="Simple Text"
  isVisible={true}
/>
```

You can show the modal visible when page has loaded, e.g. to show a 
notice or whatever.

You can use the "ESC" key to close the modal view.
