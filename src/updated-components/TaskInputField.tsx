import '../styles/task-input-field/task-input-field.scss';

export const TaskInputField = () => {
    return (
        <input
            type="text"
            required={true}
            placeholder='Olá mundo'
            className='task-input-field'/>
    )
}