import { generateClasses } from '@formkit/themes'

const config = {
  config: {
    classes: generateClasses({
      global: { // classes
        outer: '$reset form-group',
				input: 'form-control',
				label: 'form-label',
				messages: 'list-unstyled small mb-0',
				message: 'is-invalid',
				help: 'form-text'   
      },
      range: {
        input: '$reset form-range',
      },
      submit: {
        outer: '$reset mt-3',
        input: '$reset btn btn-primary'
      }
    })
  }
}

export default config