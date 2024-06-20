import React, { useRef, useState } from "react";
import { Highlight } from "../highlight/Highlight"
import { useClickOutside } from "../../../hooks/useClickOutSide";
import "./customSelect.scss";

export const CustomSelect = ({
	title,
	placeholder,
	suggestions = [],
	onChange,
	loading = false,
	renderOptions,
	icon,
	type = "select",
	required,
	value,
	onChangeInput,
	inputValue = "",
	id = "",
	error = false,
}) => {
	const ref = useRef(null);
	const [focused, setFocused] = useState(false);

	const handleInputChange = (event) => {
		const { value } = event.target;

		type !== "select" && onChangeInput(value);

		const findValue = filteredSuggestions.find(
			(el) => el.label.toLowerCase() === value.toLowerCase()
		);
		if (findValue) {
			onChange(findValue.value);
		} else {
			onChange("");
		}
	};

	const handleSuggestionClick = ({ label, value: optionValue }) => {
		type !== "select" && onChangeInput(label);
		onChange(optionValue);
		setFocused(false);
	};

	const handleClear = () => {
		onChange("");
		type !== "select" && onChangeInput("");
	};

	useClickOutside(ref, () => {
		setFocused(false);
	});

	const renderValue = () => {
		if (type !== "select") {
			return inputValue;
		}
		const labelPorValue = Object.fromEntries(
			filteredSuggestions.map((el) => [el.value, el.label])
		);

		return labelPorValue[value] || "";
	};

	const filteredSuggestions = suggestions.filter(({ label }) =>
		label.toLowerCase().startsWith(inputValue.toLowerCase())
	);

	return (
		<div ref={ref} className="d-flex flex-column gap-2 container-custom-select">
			<span className="title">
				{title}&nbsp;{required && "*"}
			</span>
			<div className="d-flex flex-column autocomplete position-relative">
				<div
					data-focused={focused}
					className={`d-flex form-control align-items-center gap-2 container-input`}
					style={error ? { border: "1px solid #DA1414", background: "#FEEFEF" } : {}}
				>
					{icon && icon()}
					<input
						readOnly={type === "select"}
						style={{ cursor: "default" }}
						onClick={() => setFocused(!focused)}
						className="input-auto"
						type="text"
						value={renderValue()}
						onChange={handleInputChange}
						placeholder={placeholder}
					/>
					{loading ? (
						<div className="loading" />
					) : inputValue && type !== "select" ? (
						<span
							onClick={handleClear}
							role="button"
							id={id}
							className="material-symbols-outlined clear-search"
						>
							clear
						</span>
					) : (
						<span
							className="material-symbols-outlined select-filtro-icon"
							style={{ color: focused ? "#00995c" : "initial" }}
						>
							{!focused ? "expand_more" : "expand_less"}
						</span>
					)}
				</div>
				{focused && (
					<ul className="container-result w-100">
						{filteredSuggestions.map(({ label, value: optionValue }, index) => {
							return (
								<li
									role={"button"}
									className="options"
									key={index}
									onClick={() => {
										handleSuggestionClick({ label, value: optionValue });
									}}
								>
									{renderOptions ? (
										renderOptions({
											value: optionValue,
											label,
										})
									) : (
										<RenderLabel inputValue={renderValue()} label={label} type={type} />
									)}
								</li>
							);
						})}

						{inputValue && !filteredSuggestions.length && (
							<li className="options empty">
								<span>
									Nenhum resultado encontrado para <b>{inputValue}</b>
								</span>
							</li>
						)}
					</ul>
				)}
			</div>
			{error && (
				<span
					style={{
						color: "#DA141C",
						fontFamily: "Unimed Sans",
						fontSize: "14px",
						fontWeight: 600,
						lineHeight: "150%",
					}}
				>
					O campo {title} é obrigatório.
				</span>
			)}
		</div>
	);
};

const RenderLabel = ({ label, type, inputValue }) => {
	if (type == "select") {
		return label === inputValue ? <b>{label}</b> : label;
	}
	return <Highlight query={inputValue}>{label}</Highlight>;
};
